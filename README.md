## Email form

Contact form is using [EmailJS](https://www.emailjs.com/). Follow its [docs](https://www.emailjs.com/docs/tutorial/overview/) for integration steps.

## ReCaptcha v2

There is [ReCaptcha](https://www.emailjs.com/docs/user-guide/adding-captcha-verification/) integration for spam protection.  
Google cloud's config can be found in [admin panel](https://console.cloud.google.com/security) under _Detections and controls_ and _ReCaptcha_.

#### Working locally

ReCaptcha keys allow only specific domains to use them. To test locally, add `localhost` to the list of allowed domains in the ReCaptcha admin panel.  
This can be found under the key's details and _Edit key_ button.

> Note: remove `localhost` from the list as soon as you stop working locally!
