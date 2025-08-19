"use client";

import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    // Initialize and load Tawk.to script
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/661049471ec1082f04df4729/1hqnpsfkf";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Remove Tawk widget elements
      const tawkWidget = document.getElementById("tawk-widget");
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, []);

  return null;
}