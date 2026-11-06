/**
 * Global Site Configuration & Business Details
 * Modify phone numbers, WhatsApp, and location details in this single file,
 * and it will instantly update across all components, pages, links, and schemas.
 */

export const siteConfig = {
  name: "Jan Mega Mall",
  tagline: "Timergara's Premier Footwear Destination",
  
  // Contact details
  phone: "03041237882",
  phoneFormatted: "0304 1237882",
  phoneInternational: "+92 304 1237882",
  whatsappNumber: "923041237882", // Format without '+' or leading '0' for wa.me links
  
  /**
   * Helper function to build WhatsApp chat or order URL
   */
  getWhatsAppLink: (message?: string) => {
    const base = "https://wa.me/923041237882";
    if (!message) return base;
    return `${base}?text=${encodeURIComponent(message)}`;
  },

  // Location details
  location: {
    street: "Rest House Road",
    city: "Timergara",
    district: "Dir Lower",
    province: "KPK",
    country: "Pakistan",
    shortAddress: "Rest House Road, Timergara",
    fullAddress: "Rest House Road, Timergara, District Dir Lower, KPK, Pakistan",
    coordinates: {
      latitude: "34.8286",
      longitude: "71.8407",
    },
  },

  // Store Timings & Support
  timings: "Mon - Sat: 9:00 AM - 10:00 PM | Sun: 2:00 PM - 10:00 PM",
  email: "support@janmegamall.pk",
  websiteUrl: "https://janmegamall.pk",
};

export default siteConfig;
