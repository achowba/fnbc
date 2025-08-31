import { ActionType } from '@/types';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import QuickAccessItem from './QuickAccessItem';
import SectionTitle from './SectionTitle';

type QuickAccessProps = {
  actions: ActionType[];
  numberOfColumns?: number;
};

// const QuickAccess = ({ actions }: QuickAccessProps) => {
//   return (
//     <>
//       <SectionTitle title="Quick Access" linkTo="/transactions" />
//       <View style={styles.container}>
//         <FlatList
//           data={actions}
//           renderItem={({ item }) => <QuickAccessItem item={item} />}
//           keyExtractor={(item, index) => index.toString()}
//           numColumns={4}
//           contentContainerStyle={styles.container}
//           columnWrapperStyle={styles.columnWrapper}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//       {/* <View style={styles.container}>
//         {actions.map((action, index) => (
//           <QuickAccessItem item={action} key={index} />
//         ))}
//       </View> */}
//     </>
//   );
// };

const QuickAccess = ({ actions, numberOfColumns = 4 }: QuickAccessProps) => {
  const renderQuickActions = useMemo(() => {
    if (actions.length === 0) {
      return null;
    }

    const rows: ActionType[][] = [];

    // Split actions into rows based on numberOfColumns
    for (let i = 0; i < actions.length; i += numberOfColumns) {
      rows.push(actions.slice(i, i + numberOfColumns));
    }

    return rows.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((item) => (
          <QuickAccessItem item={item} key={item.id} />
        ))}
      </View>
    ));
  }, [actions, numberOfColumns]);

  return (
    <View style={styles.container}>
      <SectionTitle title="Quick Access" linkTo="/transactions" />
      <View style={styles.actionsContainer}>{renderQuickActions}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    overflow: 'hidden',
  },
  actionsContainer: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
});

export default QuickAccess;
