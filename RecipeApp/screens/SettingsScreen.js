import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SettingsScreen() {
  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Privacy Settings</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Text>Private Account</Text>
        <Switch value={isPrivate} onValueChange={setIsPrivate} />
      </View>
    </View>
  );
}
