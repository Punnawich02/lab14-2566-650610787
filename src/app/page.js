"use client";
import { Footer } from "@/components/Footer";
import { TestComponent } from "@/components/TestComponent";
import { Container } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <TestComponent />
      <Footer name="Punnawich Dach-in" stuid = "650610787"/>
    </Container>
  );
}
