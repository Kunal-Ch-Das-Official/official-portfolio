/**
 * Project Name: Kunal Chandra Das Portfolio backend
 * File Name:    Send reset password link
 * Author      : Kunal Chandra Das
 * Date        : 28.10.2024
 * Version     : 2.0.0
 * Details     : This class handles sending a password reset link to the user
 *               via email. It uses the `nodemailer` package to send emails and
 *               includes a dynamically generated reset link in the email body.
 *
 *               **Method: `sendMail`**
 *
 *               This method sends an email to the user with a link to reset
 *               their password. The email includes a personalized greeting and
 *               a clickable reset button that directs the user to the password
 *               reset page.
 *
 *               The method works as follows:
 *
 *               1. **Create a Transporter**: It creates a transporter using
 *                  `nodemailer.createTransport()`, connecting to the SMTP server
 *                  with the credentials provided in `envConfig` (such as email host,
 *                  port, and authentication details).
 *
 *               2. **Prepare Email Details**: The email is constructed with the
 *                  subject `"Kunal Chandra Das - Admin User Password Reset Request"`.
 *                  It includes an HTML body with a personalized greeting (using
 *                  `userName`) and a clickable reset link (`corespondingLink`).
 *
 *               3. **Send Email**: The method uses `transporter.sendMail()` to
 *                  send the email, including the recipient's email address, subject,
 *                  and body content. The reset link is embedded in the body as an
 *                  anchor tag (`<a href=...>`).
 *
 *               4. **Error Handling**: If any error occurs during the email sending
 *                  process (e.g., SMTP issues), the method responds with a `500`
 *                  status code, including an error message and further instructions
 *                  for the user. The error message will be related to a technical issue.
 *
 *               5. **Success Response**: If the email is successfully sent, the
 *                  method responds with a `200` status code, including the reset link
 *                  and a notification that the email was sent to the user.
 *
 *               **Parameters**:
 *               - `sendTo`: The recipient's email address (string).
 *               - `userName`: The recipient's name for personalization in the greeting
 *                 (string).
 *               - `corespondingLink`: The password reset link (string) to be included
 *                 in the email.
 *               - `response`: The response object for sending the status back to the client.
 *
 *               **Return Type**: The method does not return anything directly but
 *               sends a response back to the client (success or error response).
 *
 *               This class is useful for securely sending password reset links
 *               to users who have forgotten their passwords, allowing them to
 *               reset their credentials via email.
 */

import nodemailer from "nodemailer";
import envConfig from "../../../config/envConfig";

class ResetPasswordLink {
  public async sendMail(
    sendTo: string,
    userName: string,
    corespondingLink: string,
    response: any
  ): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        host: envConfig.emailHostProtocol,
        port: envConfig.emailPort,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: envConfig.emailHostUser,
          pass: envConfig.emailHostPassword,
        },
      });

      const mailOptions = {
        from: envConfig.emailHostUser, // Sender address
        to: sendTo, // List of receivers
        subject: "Kunal Chandra Das - Admin User Password Reset Request",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title></title>
    <style type="text/css" rel="stylesheet" media="all">
      /* Base ------------------------------ */

      @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
      body {
        width: 100% !important;
        height: 100%;
        margin: 0;
        -webkit-text-size-adjust: none;
      }

      a {
        color: #3869d4;
      }

      a img {
        border: none;
      }

      td {
        word-break: break-word;
      }

      .preheader {
        display: none !important;
        visibility: hidden;
        mso-hide: all;
        font-size: 1px;
        line-height: 1px;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
      }
      /* Type ------------------------------ */

      body,
      td,
      th {
        font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      }

      h1 {
        margin-top: 0;
        color: #333333;
        font-size: 22px;
        font-weight: bold;
        text-align: left;
      }

      h2 {
        margin-top: 0;
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }

      h3 {
        margin-top: 0;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }

      td,
      th {
        font-size: 16px;
      }

      p,
      ul,
      ol,
      blockquote {
        margin: 0.4em 0 1.1875em;
        font-size: 16px;
        line-height: 1.625;
      }

      p.sub {
        font-size: 13px;
      }
      /* Utilities ------------------------------ */

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .align-center {
        text-align: center;
      }

      .u-margin-bottom-none {
        margin-bottom: 0;
      }
      /* Buttons ------------------------------ */

      .button {
        background-color: #3869d4;
        border-top: 10px solid #3869d4;
        border-right: 18px solid #3869d4;
        border-bottom: 10px solid #3869d4;
        border-left: 18px solid #3869d4;
        display: inline-block;
        color: #fff !important;
        text-decoration: none;
        border-radius: 3px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
        -webkit-text-size-adjust: none;
        box-sizing: border-box;
      }

      .button--green {
        background-color: #22bc66;
        border-top: 10px solid #22bc66;
        border-right: 18px solid #22bc66;
        border-bottom: 10px solid #22bc66;
        border-left: 18px solid #22bc66;
        color: #fff !important;
      }

      .button--red {
        background-color: #ff6136;
        border-top: 10px solid #ff6136;
        border-right: 18px solid #ff6136;
        border-bottom: 10px solid #ff6136;
        border-left: 18px solid #ff6136;
         color: #fff !important;
      }

      @media only screen and (max-width: 500px) {
        .button {
          width: 100% !important;
           color: #fff !important;
          text-align: center !important;
        }
      }
      /* Attribute list ------------------------------ */

      .attributes {
        margin: 0 0 21px;
      }

      .attributes_content {
        background-color: #f4f4f7;
        padding: 16px;
      }

      .attributes_item {
        padding: 0;
      }
      /* Related Items ------------------------------ */

      .related {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .related_item {
        padding: 10px 0;
        color: #cbcccf;
        font-size: 15px;
        line-height: 18px;
      }

      .related_item-title {
        display: block;
        margin: 0.5em 0 0;
      }

      .related_item-thumb {
        display: block;
        padding-bottom: 10px;
      }

      .related_heading {
        border-top: 1px solid #cbcccf;
        text-align: center;
        padding: 25px 0 10px;
      }
      /* Discount Code ------------------------------ */

      .discount {
        width: 100%;
        margin: 0;
        padding: 24px;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #f4f4f7;
        border: 2px dashed #cbcccf;
      }

      .discount_heading {
        text-align: center;
      }

      .discount_body {
        text-align: center;
        font-size: 15px;
      }
      /* Social Icons ------------------------------ */

      .social {
        width: auto;
      }

      .social td {
        padding: 0;
        width: auto;
      }

      .social_icon {
        height: 20px;
        margin: 0 8px 10px 8px;
        padding: 0;
      }
      /* Data table ------------------------------ */

      .purchase {
        width: 100%;
        margin: 0;
        padding: 35px 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .purchase_content {
        width: 100%;
        margin: 0;
        padding: 25px 0 0 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .purchase_item {
        padding: 10px 0;
        color: #51545e;
        font-size: 15px;
        line-height: 18px;
      }

      .purchase_heading {
        padding-bottom: 8px;
        border-bottom: 1px solid #eaeaec;
      }

      .purchase_heading p {
        margin: 0;
        color: #85878e;
        font-size: 12px;
      }

      .purchase_footer {
        padding-top: 15px;
        border-top: 1px solid #eaeaec;
      }

      .purchase_total {
        margin: 0;
        text-align: right;
        font-weight: bold;
        color: #333333;
      }

      .purchase_total--label {
        padding: 0 15px 0 0;
      }

      body {
        background-color: #f2f4f6;
        color: #51545e;
      }

      p {
        color: #51545e;
      }

      .email-wrapper {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #f2f4f6;
      }

      .email-content {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }
      /* Masthead ----------------------- */

      .email-masthead {
        padding: 25px 0;
        text-align: center;
      }

      .email-masthead_logo {
        width: 94px;
      }

      .email-masthead_name {
        font-size: 16px;
        font-weight: bold;
        color: #a8aaaf;
        text-decoration: none;
        text-shadow: 0 1px 0 white;
      }
      /* Body ------------------------------ */

      .email-body {
        width: 100%;
        margin: 0;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
      }

      .email-body_inner {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        background-color: #ffffff;
      }

      .email-footer {
        width: 570px;
        margin: 0 auto;
        padding: 0;
        -premailer-width: 570px;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        text-align: center;
      }

      .email-footer p {
        color: #a8aaaf;
      }

      .body-action {
        width: 100%;
        margin: 30px auto;
        padding: 0;
        -premailer-width: 100%;
        -premailer-cellpadding: 0;
        -premailer-cellspacing: 0;
        text-align: center;
      }

      .body-sub {
        margin-top: 25px;
        padding-top: 25px;
        border-top: 1px solid #eaeaec;
      }

      .content-cell {
        padding: 45px;
      }
      /*Media Queries ------------------------------ */

      @media only screen and (max-width: 600px) {
        .email-body_inner,
        .email-footer {
          width: 100% !important;
        }
      }

      @media (prefers-color-scheme: dark) {
        body,
        .email-body,
        .email-body_inner,
        .email-content,
        .email-wrapper,
        .email-masthead,
        .email-footer {
          background-color: #333333 !important;
          color: #fff !important;
        }
        p,
        ul,
        ol,
        blockquote,
        h1,
        h2,
        h3,
        span,
        .purchase_item {
          color: #fff !important;
        }
        .attributes_content,
        .discount {
          background-color: #222 !important;
        }
        .email-masthead_name {
          text-shadow: none !important;
        }
      }

      :root {
        color-scheme: light dark;
      }
    </style>
  </head>
  <body>
    <span class="preheader"
      >Use this link to reset your password. The link is only valid for 24
      hours.</span
    >
    <table
      class="email-wrapper"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
    >
      <tr>
        <td align="center">
          <table
            class="email-content"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
          >
            <tr>
              <td class="email-masthead">
                <a
                  href="https://example.com"
                  class="f-fallback email-masthead_name"
                >
                  Kunal Chandra Das Official Portfolio Admin
                </a>
              </td>
            </tr>
            <!-- Email Body -->
            <tr>
              <td
                class="email-body"
                width="570"
                cellpadding="0"
                cellspacing="0"
              >
                <table
                  class="email-body_inner"
                  align="center"
                  width="570"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                >
                  <!-- Body content -->
                  <tr>
                    <td class="content-cell">
                      <div class="f-fallback">
                        <h1>Hi ${userName},</h1>
                        <p>
                          You recently requested to reset your password for your
                          Kunal Chandra Das Official Portfolio Admin account.
                          Use the button below to reset it.
                          <strong
                            >This password reset is only valid for the next 5
                            minutes.</strong
                          >
                        </p>
                        <!-- Action -->
                        <table
                          class="body-action"
                          align="center"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td align="center">
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                              >
                                <tr>
                                  <td align="center">
                                    <a
                                      href=${corespondingLink}
                                      class="f-fallback button button--green"
                                      target="_blank"
                                      >Reset your password</a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <p>
                          For security, this request was received from ${sendTo} . If
                          you did not request a password reset, please ignore
                          this email or
                          <a href="mailto:kunalchandradasofficial@gmail.com">contact support</a> if you
                          have questions.
                        </p>
                        <p>Thanks, <br />The kunalchandradas.tech</p>
                        <!-- Sub copy -->
                        <table class="body-sub" role="presentation">
                          <tr>
                            <td>
                              <p class="f-fallback sub">
                                If you’re having trouble with the button above,
                                copy and paste the URL below into your web
                                browser.
                              </p>
                              <p class="f-fallback sub">${corespondingLink}</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  class="email-footer"
                  align="center"
                  width="570"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                ></table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return response.status(500).json({
            issue: error.message,
            details:
              "Unable to send this mail due to technical problem, please try again later",
          });
        } else {
          return response.status(200).json({
            message: "Email has been send successfully",
            resetLink: corespondingLink,
            notification: `Password reset link has been sended to this:${sendTo} email account.${info}`,
          });
        }
      });
    } catch (error: any) {
      return response.status(500).json({
        issue: error.message,
        details: "Unable to perform this task due to some technical problem.",
        message:
          "Please try again later, or if the issue not resolve autometically then contact with your tech support team.",
      });
    }
  }
}
export default ResetPasswordLink;
