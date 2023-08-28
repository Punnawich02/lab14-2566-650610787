"use client";

import { Button, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export const TestComponent = () => {
  return <div><Title order={2}>Food Review 🍕</Title>

  <Title order={4} mt='sm'>Your rating</Title>
  <Rating defaultValue={0} title="rating" size="lg"/>
  
  <Textarea placeholder="Do you enjoy eating?" label="Your review" radius="sm" mt="xs" minRows={3}/>
  <Button color="orange" mt="xs">Submit Review</Button>
  
  <Divider my="sm" mt="xs"/>
  
  <Group position="center">
    <Title order={4}>Elon Musk</Title>
    <Rating value={5} readOnly/>
  </Group>
  <Text align="center" c="dimmed">Best pizza in this world. I give you X score.</Text>
  
  <Divider my="sm" mt="xs"/>

  <Group position="center">
    <Title order={4}>Mark Zuck</Title>
    <Rating value={4} readOnly/>
  </Group>
  <Text align="center" c="dimmed">My favourite part is pepperoni</Text>

  <Pagination total={20} color="orange" position="center" mt="md"/>
</div>;
};
