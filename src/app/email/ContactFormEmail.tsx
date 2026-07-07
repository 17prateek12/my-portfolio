import React from "react";
import {
  Html,
  Body,
  Head,
  Heading as ReactEmailHeading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  senderemail: string;
}

const ContactFormEmail = ({ message, senderemail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-slate-200 my-10 px-10 py-4 rounded-md border border-solid">
              <ReactEmailHeading className="leading-tight text-xl font-bold">
                You received the following message from the contact form
              </ReactEmailHeading>
              <Text className="mt-4 text-base leading-relaxed">{message}</Text>
              <Hr className="border-slate-200 my-4" />
              <Text className="text-sm text-slate-550">
                The sender&apos;s email is: {senderemail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export { ContactFormEmail };
