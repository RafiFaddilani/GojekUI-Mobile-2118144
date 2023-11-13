import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import { Clock, SearchNormal1, ProfileCircle, Wallet3, CardSend, MoreCircle, Home } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { sprite, box, bill, more, scooter, shopping, spoon, train, car } from '../../assets/Images';


export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.iconContainer}>
     <View style={styles.logoContainer}>
            <Image
              source={{
                uri: 'https://png.pngtree.com/png-clipart/20230812/original/pngtree-motorcycle-transport-color-icon-vector-picture-image_7872690.png',
              }}
              style={styles.logo}
            />
            <Text style={styles.logoText}>Skuuy</Text>
          </View>
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <ProfileCircle color='blue' variant='Bold' size={40} style={styles.profileIcon} />
        </View>
      <ScrollView>
        <Image
          source={sprite}
          style={styles.image}
        />
        <Payment />
        <Main />
      </ScrollView>
    </View>
  )
}

const Payment = () => {
  return (
    <View style={payment.container}>
      <Wallet3 color='#00819F' variant='Bold' size={40} style={payment.wallet} />
      <View style={payment.debit}>
        <Text style={payment.saldo}>Rp10.000</Text>
        <Text style={payment.coin}>0 Coins</Text>
      </View>
      <View style={payment.pay} >
        <CardSend color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Bayar</Text>
      </View>
      <View style={payment.history}>
        <Clock color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Riwa...</Text>
      </View>
      <View style={payment.more}>
        <MoreCircle color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Lainn...</Text>
      </View>
    </View>
  )
}

const Main = () => {
  return (
    <View style={home.container}>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={scooter}
            style={home.icon}
          />
          <Text style={home.goRideText}>GoRide</Text>
        </View>
        <View style={home.background}>
          <Image
            source={car}
            style={home.icon}
          />
          <Text style={home.goCarText}>GoCar</Text>
        </View>
        <View style={home.background}>
          <Image
            source={spoon}
            style={home.icon}
          />
          <Text style={home.goFoodText}>GoFood</Text>
        </View>
        <View style={home.background}>
          <Image
            source={box}
            style={home.icon}
          />
          <Text style={home.goSendText}>GoSend</Text>
        </View>
      </View>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={shopping}
            style={home.icon}
          />
          <Text style={home.goMartText}>GoMart</Text>
        </View>
        <View style={home.background}>
          <Image
            source={bill}
            style={home.icon}
          />
          <Text style={home.goBillText}>GoTagih</Text>
        </View>
        <View style={home.background}>
          <Image
            source={train}
            style={home.icon}
          />
          <Text style={home.goTransitText}>GoTrans</Text>
        </View>
        <View style={home.background}>
          <Image
            source={more}
            style={home.icon}
          />
          <Text style={home.goMoreText}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
}

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    left: -10,
    justifyContent: 'space-between',
    marginTop: 40,
    
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50, // Add some margin to separate rows
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
    marginHorizontal: 15,
  },
  icon: {
    top: 8,
    left: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  goRideText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goCarText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    left: 5,
  },
  goFoodText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goSendText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goMartText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    left: 3,
  },
  goBillText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    // left: -10,
  },
  goTransitText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goMoreText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    left: 10,
    marginRight: 25, // Jarak antara gambar dan teks
  },
  logoText: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
    right: 5,
  },
  image: {
    width: 'auto',
    top: 30,
    height: 140,
    objectFit: 'cover',
  },
  header: {
    padding: 20,
  },
  searchbar: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    left: 12,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
    top: 10,
  },
  iconContainer: {
    paddingRight: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 56,
    left: 23,
  },
  profileIcon: {
    position: 'absolute',
    left: 315,
    top: 40,
  },
})

const payment = StyleSheet.create({
  container: {
    top: 15,
    marginHorizontal: 20,
    width: 'auto',
    height: 60,
    backgroundColor: colors.white(),
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFF7F6',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1, // Meningkatkan nilai ini akan membuat bayangan lebih tebal
    shadowRadius: 10, // Meningkatkan nilai ini akan membuat bayangan lebih menyebar
    elevation: 5, // Ini berlaku hanya untuk Android
  },
  wallet: {
    justifyContent: 'center',
    top: 8,
    left: 15,
  },
  saldo: {
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  debit: {
    justifyContent: 'center',
    left: 25,
  },
  pay: {
    justifyContent: 'center',
    left: 50,
  },
  payText: {
    left: -5,
    fontSize: 12,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  history: {
    justifyContent: 'center',
    left: 70,
  },
  more: {
    justifyContent: 'center',
    left: 80,
  },
});
