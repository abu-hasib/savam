import React from 'react';

import { Image, Text, View } from '@/ui';

export const Transaction = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row gap-2">
        <Image
          className="h-10 w-10 rounded-full object-cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2r.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
        />
        <View>
          <Text className="font-light">ETH</Text>
          <Text className="text-xs text-gray-500">$2.063.63</Text>
        </View>
      </View>
      <View className="flex-col">
        <Text>0.261224</Text>
        <Text className="text-right text-xs text-gray-500">$539.07</Text>
      </View>
    </View>
  );
};
