import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Your Feedback</Text>
      <TextInput
        placeholder="Type your comment here..."
        value={feedback}
        onChangeText={setFeedback}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <Button title="Submit" onPress={() => setSubmitted(true)} />
      {submitted && <Text style={{ marginTop: 10 }}>Thank you for your feedback!</Text>}
    </View>
  );
}
