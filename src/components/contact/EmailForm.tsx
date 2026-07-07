'use client';
import React, { useState } from "react";
import { sendEmail } from "@/app/api/send/SendEmail";
import { FiSend } from "react-icons/fi";

export const EmailForm: React.FC = () => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await sendEmail(formData);
      if (response.error) {
        setError(response.error);
      } else {
        setSuccess("Email sent successfully!");
        (e.target as HTMLFormElement).reset();
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="contact-form-box glass-card">
      <form onSubmit={handleSubmit} className="form-elements-wrap">
        
        {/* Email Input */}
        <div className="form-input-group">
          <label className="form-field-label">
            E-Mail Address
          </label>
          <input
            type="email"
            name="senderemail"
            required
            placeholder="your-email@example.com"
            className="form-input-element"
          />
        </div>

        {/* Subject Input */}
        <div className="form-input-group">
          <label className="form-field-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Collaboration / Inquiry"
            className="form-input-element"
          />
        </div>

        {/* Message Textarea */}
        <div className="form-input-group">
          <label className="form-field-label">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Hi Prateek, I'd like to work with you on..."
            className="form-textarea-element"
            style={{ resize: 'none' }}
          ></textarea>
        </div>

        {/* Status Alerts */}
        {error && (
          <div className="form-status-alert error">
            {error}
          </div>
        )}
        {success && (
          <div className="form-status-alert success">
            {success}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={pending}
          className="btn-primary"
          style={{ gap: '0.5rem', width: '100%' }}
        >
          {pending ? (
            <div className="spinner"></div>
          ) : (
            <>
              <FiSend />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
