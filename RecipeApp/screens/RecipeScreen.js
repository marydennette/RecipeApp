import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import VoiceGuideButton from '../components/VoiceGuideButton';

export default function RecipeScreen() {
  const [step, setStep] = useState(0);
  const steps = [
    "Gather ingredients",
    "Preheat oven to 180°C",
    "Mix flour and sugar",
    "Bake for 30 minutes"
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recipe Steps</Text>
      <Text style={{ marginVertical: 10 }}>{steps[step]}</Text>
      <VoiceGuideButton text={steps[step]} />
      <Button title="Next Step" onPress={() => setStep((step + 1) % steps.length)} />
    </View>
  );
}

