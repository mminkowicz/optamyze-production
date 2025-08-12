// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.isEnabled = process.env.NODE_ENV === 'development';
  }

  // Start timing a specific operation
  startTimer(name) {
    if (!this.isEnabled) return;
    
    this.metrics[name] = {
      startTime: performance.now(),
      endTime: null,
      duration: null
    };
  }

  // End timing and log the result
  endTimer(name) {
    if (!this.isEnabled || !this.metrics[name]) return;
    
    this.metrics[name].endTime = performance.now();
    this.metrics[name].duration = this.metrics[name].endTime - this.metrics[name].startTime;
    
    console.log(`⏱️ ${name}: ${this.metrics[name].duration.toFixed(2)}ms`);
    
    // Warn if operation takes too long
    if (this.metrics[name].duration > 100) {
      console.warn(`⚠️ Slow operation detected: ${name} took ${this.metrics[name].duration.toFixed(2)}ms`);
    }
  }

  // Monitor frame rate
  monitorFrameRate() {
    if (!this.isEnabled) return;
    
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        console.log(`🎬 FPS: ${fps}`);
        
        if (fps < 30) {
          console.warn(`⚠️ Low frame rate detected: ${fps} FPS`);
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
  }

  // Monitor memory usage
  monitorMemory() {
    if (!this.isEnabled || !performance.memory) return;
    
    setInterval(() => {
      const memory = performance.memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
      const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
      
      console.log(`💾 Memory: ${usedMB}MB / ${totalMB}MB`);
      
      if (usedMB > 100) {
        console.warn(`⚠️ High memory usage: ${usedMB}MB`);
      }
    }, 5000);
  }

  // Monitor scroll performance
  monitorScrollPerformance() {
    if (!this.isEnabled) return;
    
    let scrollEvents = 0;
    let lastScrollTime = performance.now();
    
    const handleScroll = () => {
      scrollEvents++;
      const currentTime = performance.now();
      
      if (currentTime - lastScrollTime >= 1000) {
        console.log(`📜 Scroll events per second: ${scrollEvents}`);
        
        if (scrollEvents > 60) {
          console.warn(`⚠️ High scroll event rate: ${scrollEvents} events/sec`);
        }
        
        scrollEvents = 0;
        lastScrollTime = currentTime;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Get device performance info
  getDeviceInfo() {
    if (!this.isEnabled) return;
    
    const info = {
      userAgent: navigator.userAgent,
      deviceMemory: navigator.deviceMemory || 'Unknown',
      hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
      connection: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt
      } : 'Unknown',
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        pixelRatio: window.devicePixelRatio
      }
    };
    
    console.log('📱 Device Info:', info);
    return info;
  }

  // Monitor component render times
  monitorComponentRender(componentName) {
    if (!this.isEnabled) return;
    
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      console.log(`⚛️ ${componentName} render: ${duration.toFixed(2)}ms`);
      
      if (duration > 16) { // Longer than one frame at 60fps
        console.warn(`⚠️ Slow component render: ${componentName} took ${duration.toFixed(2)}ms`);
      }
    };
  }

  // Start all monitoring
  startMonitoring() {
    if (!this.isEnabled) return;
    
    console.log('🚀 Starting performance monitoring...');
    
    this.monitorFrameRate();
    this.monitorMemory();
    this.monitorScrollPerformance();
    this.getDeviceInfo();
    
    // Monitor page load performance
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`📄 Page load time: ${loadTime}ms`);
    });
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Export for use in components
export default performanceMonitor;

// Export individual functions for convenience
export const {
  startTimer,
  endTimer,
  monitorComponentRender,
  startMonitoring
} = performanceMonitor;
