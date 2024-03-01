'use client';

import Button from "@/components/Button";
import { PrimaryButtonProps, SecondaryButtonProps } from "@/components/Button";

export default function Home() {
  return (
    <section>
      <Button {...PrimaryButtonProps} {...SecondaryButtonProps} />
    </section>
  );
}
