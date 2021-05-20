// import React, {useState, useContext} from 'react';
// import {View, ActivityIndicator} from 'react-native';

// import {useAuth} from '../context/auth';

// import AuthRoutes from '../routes/auth.routes';
// import AppRoutes from '../routes/app.routes';
// import AuthRoutes from '../routes/auth.routes';
// // import AppRoutes from '../routes/app.routes';

// const Routes: React.FC = () => {
//   const [isSigned, loading] = useAuth();
//   if (loading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator size="large" color="#6a6a6a" />
//       </View>
//     );
//   }

//   return isSigned ? <AuthRoutes /> : <AppRoutes />;
// };

// export default Routes;
