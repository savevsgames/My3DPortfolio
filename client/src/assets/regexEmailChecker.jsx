export const regexEmailChecker = {
  isValidEmail(email) {
    // Regular expression to check for a valid email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // List of common spam keywords or domains
    const spamKeywords = [
      "spam",
      "junk",
      "fake",
      "test",
      "no-reply",
      "example",
    ];

    // This list could come from an external db or API in a commercial or high-traffic application and I may update it if i get spam emails.
    const spamDomains = ["spammail.com", "tempmail.com", "fakeemail.com"];

    // Check if the email matches the regular expression for valid format
    if (!emailRegex.test(email)) {
      return false;
    }

    // Extract the domain from the email
    const emailDomain = email.split("@")[1];

    // Check if the email contains any spam keywords or comes from a spam domain
    for (const keyword of spamKeywords) {
      if (email.includes(keyword)) {
        return false;
      }
    }

    for (const domain of spamDomains) {
      if (emailDomain === domain) {
        return false;
      }
    }
    // If the email passes all the checks, return true
    return true;
  },
};

export default regexEmailChecker;
