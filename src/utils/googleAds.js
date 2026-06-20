export const trackPhoneCall = (phoneUrl) => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18058321546/BK2QCOSYt8IcEIq98KJD",
      value: 1.0,
      currency: "INR",
      event_callback: function () {
        window.location.href = phoneUrl;
      },
    });

    setTimeout(() => {
      window.location.href = phoneUrl;
    }, 1000);

  } else {
    window.location.href = phoneUrl;
  }
};