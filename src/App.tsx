import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, ScrollView, Image, Dimensions, Text} from 'react-native'; //flatlist veri görüntülemesi için kullanılır. scrollview verileri kaydırmalı görüntülemek içindir
import NewsCard from './components/NewsCard/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {

  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.header_text}>NEWS</Text>
      <View>
        <FlatList
        ListHeaderComponent={() => <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          news_banner_data.map(bannerNews =>( <Image 
            style={styles.banner_image}
            source ={{uri: bannerNews.imageUrl}} />))
        }
      </ScrollView>} //LISTHEADER İLE FLATLIST ÜSTÜNDE BİR ŞEY TANIMLAYABİLİYORUZ. ÜSTTEKİ RESİMLERİN SAYFA AŞAĞI İNİCE SABİT KALMAMASI SAĞLANDI
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        /> 
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image :{
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width/ 2,
  },
  header_text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#b22222',
    textAlign: 'center',
    fontStyle:'italic',
  },
});
export default App;
