import React from 'react';

import {
  ArrowRight,
  FocusAwareStatusBar,
  Home,
  Image,
  ScrollView,
  Text,
  View,
} from '@/ui';

import { Transaction } from './transaction';

export const Style = () => {
  // const { mutate: AddCustomer, isLoading } = useAddCustomer();
  const handlePress = () => {};
  return (
    <View className="px-4 py-2">
      <ScrollView>
        <FocusAwareStatusBar />
        <View className="space-y-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Image
                className="h-10 w-10 rounded-full object-cover"
                source={{
                  uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                }}
              />
              <Text className="text-lg font-bold">Hi, User</Text>
            </View>

            <ArrowRight />
          </View>

          <View className="flex-row items-center justify-between">
            <View className="space-y-2">
              <View className="flex-row items-center gap-2">
                <ArrowRight />
                <Text className="text-sm font-bold">US Dollars</Text>
              </View>
              <Text className="text-4xl font-bold">{'$200'}</Text>
            </View>
            <View className="flex-row items-center gap-1 rounded-md bg-white p-2 shadow-lg">
              <ArrowRight onPress={handlePress} />
              <Text className="text-sm">Add Money</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="grid h-10 w-10 place-items-center rounded-full bg-red-500 p-2">
              <Home />
            </Text>
            <Text className="grid h-10 w-10 place-items-center rounded-full bg-red-500 p-2">
              <Home />
            </Text>
            <Text className="grid h-10 w-10 place-items-center rounded-full bg-red-500 p-2">
              <Home />
            </Text>
            <Text className="grid h-10 w-10 place-items-center rounded-full bg-red-500 p-2">
              <Home />
            </Text>
          </View>

          <View className="flex-1 pt-10">
            <Text className="text-lg font-semibold">Transactions</Text>
            <View className="space-y-4">
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </View>

            {/* <TextVariants />
            <ColorVariants />
            <InputVariants />
            <ButtonVariants /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
