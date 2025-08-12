import { createContext, useContext, useEffect, useState } from 'react';

// Create context for performance settings
const PerformanceContext = createContext();

// Hook to use performance settings
export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};

// Performance provider component
export const PerformanceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check for low power mode (Safari)
    const checkLowPowerMode = () => {
      if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
          setIsLowPowerMode(battery.level < 0.2);
        });
      }
    };
    
    checkMobile();
    checkLowPowerMode();
    
    // Listen for changes
    window.addEventListener('resize', checkMobile);
    mediaQuery.addEventListener('change', (e) => setIsReducedMotion(e.matches));
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', (e) => setIsReducedMotion(e.matches));
    };
  }, []);

  // Determine if animations should be disabled
  const shouldDisableAnimations = isMobile || isReducedMotion || isLowPowerMode;

  const value = {
    isMobile,
    isReducedMotion,
    isLowPowerMode,
    shouldDisableAnimations,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};

// Optimized motion component
export const OptimizedMotion = ({ 
  children, 
  initial, 
  animate, 
  exit, 
  transition, 
  whileInView,
  viewport,
  ...props 
}) => {
  const { shouldDisableAnimations } = usePerformance();
  const [motion, setMotion] = useState(null);

  useEffect(() => {
    // Import motion dynamically to reduce bundle size
    import('framer-motion').then(({ motion: m }) => {
      setMotion(() => m.div);
    });
  }, []);

  // If animations should be disabled, render without motion
  if (shouldDisableAnimations) {
    return <div {...props}>{children}</div>;
  }

  if (!motion) {
    return <div {...props}>{children}</div>;
  }

  const MotionComponent = motion;

  return (
    <MotionComponent
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Optimized image component
export const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isMobile } = usePerformance();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={isMobile ? 'lazy' : 'eager'}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

// Lazy load component
export const LazyLoad = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { shouldDisableAnimations } = usePerformance();

  useEffect(() => {
    if (shouldDisableAnimations) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const element = document.createElement('div');
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, shouldDisableAnimations]);

  if (shouldDisableAnimations || isVisible) {
    return children;
  }

  return (
    <div className="min-h-[200px] bg-gray-100 animate-pulse rounded-lg" />
  );
};

export default PerformanceProvider;
