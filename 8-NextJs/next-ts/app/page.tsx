'use client'

import ElementWrapper from "@/components/ElementWrapper";

export default function Home() {
  return (
    <section>
      <ElementWrapper elementType="div" className="box">
        <p>This is a dive element with a class name of box</p>
      </ElementWrapper>

      <ElementWrapper elementType="h1" onClick={() => alert('h1 clicked')}>
        Header Text
      </ElementWrapper>

      <ElementWrapper elementType="button" onClick={() => alert('button clicked')}>
        Click Me
      </ElementWrapper>
    </section>
  );
}
