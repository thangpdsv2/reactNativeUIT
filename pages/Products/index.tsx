
import * as React from 'react';
import { Text, View,Button, StyleSheet, FlatList } from 'react-native';
import Loader from '../../components/Loader';
import { gql, useQuery } from '@apollo/client';

// const QUERY = gql`
// {
//     productsCollection (limit: 1){
//       items{
//         id
//         title
//       	flowersCollection{
//           items{
//             title
//             image {
//               url
//             }
//             price
//           }
//         }
//       }
//     }
// }
// `;
const QUERY = gql`
{
  productsCollection (limit: 10){
    items{
      sys {
        id
      }
      title
    }
  }
}
`;

const Products = ({ navigation }:any) =>{
    const {data,loading} = useQuery(QUERY)
    // console.log('data',data?.productsCollection.items)
    // console.log(typeof data?.productsCollection.items)
    let listButton=data?.productsCollection.items.map((page,index)=>{
      console.log("page.title'",page.title)
      console.log("page.sys.id",page.sys.id)
      return (<Button id={page?.sys.id} title={page.title} onPress={() => navigation.navigate('Flowers',{
        page
      })} />)
    })
    return (
        <View>
            {/* <Text>{JSON.stringify(data)}</Text> */}
            {listButton}
        </View>
        )
}

export default Products


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title:{
        fontsize:18,
        margin: 10
    }
})