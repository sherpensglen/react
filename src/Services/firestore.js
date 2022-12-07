import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs,doc,getDoc,query,where,addDoc } from "firebase/firestore"
import products from "../data/data";


const firebaseConfig = {
  apiKey: "AIzaSyA7D4pGWgfkssoLp8aWikcPWB5Ba7yA2yI",
  authDomain: "celkap-6c345.firebaseapp.com",
  projectId: "celkap-6c345",
  storageBucket: "celkap-6c345.appspot.com",
  messagingSenderId: "1089820517126",
  appId: "1:1089820517126:web:ff84d18f547228893db487"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);


export async function getItems(){
     const collectionProductsRef = collection(DB,"Products");
     const documentSnapshot = await getDocs(collectionProductsRef);    
     const documentData = documentSnapshot.docs.map(doc => {   
        return {
        ...doc.data(),
        id: doc.id
        }
    });
     return documentData;
}


export  async function getSingleItem(id){

    const docRef = doc(DB,"Products",id);
    const docSnapshot = await getDoc(docRef);

    return{
        ...docSnapshot.data(),
        id: docSnapshot.id
    }

}

export async function getItemsByCompany(company){

      const collectionRef = collection(DB,"Products");
      const queryComp = query(collectionRef,where("company","==",company))
      const documentSnapshot = await getDocs(queryComp);     
      console.log(documentSnapshot.data);
      const documentData = documentSnapshot.docs.map(doc => {
         return {
         ...doc.data(),
         id: doc.id
         }
     });
      return documentData;
}

export async function getItemsXiaomi(){

    const collectionRef = collection(DB,"Products");
    const queryComp = query(collectionRef,where("company","==","Xiaomi"))
    const documentSnapshot = await getDocs(queryComp);     
    console.log(documentSnapshot.data);
    const documentData = documentSnapshot.docs.map(doc => {
       return {
       ...doc.data(),
       id: doc.id
       }
   });
    return documentData;
}

export async function getSearchItems(keyword){

    const collectionProductsRef = collection(DB,"Products");
     const documentSnapshot = await getDocs(collectionProductsRef);    
     const documentData = documentSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    if(keyword.lenght === 0){
        return documentData;
    }
    else{
        let itemsRequested = documentData.filter((item) =>
          item.title.toLowerCase().includes(keyword)
        );
        return itemsRequested;
    }
}

export async function createOrder(order){
  const collectionRef = collection(DB,"orders");
  const docOrder = await addDoc(collectionRef,order);
  return docOrder.id;
}

export  async function getOrderById(id){

    const docRef = doc(DB,"orders",id);
    const docSnapshot = await getDoc(docRef);
    return {...docSnapshot.data()};

}

export async function exportArrayToFirestore(){

    const prod = products;
    const collectionRef = collection(DB,"Products");

    for(const item of prod){
        item.index = item.id;
        delete item.id;
        let docOrder = await addDoc(collectionRef,item);
    }

}
