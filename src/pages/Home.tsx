import { IonButton, IonContent, IonPage, ToastOptions, useIonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [queue, setQueue] = useState<ToastOptions[]>([])
  const [isPresenting, setIsPresenting] = useState<boolean>(false)
  const [present] = useIonToast()

  useEffect(() => {
    if (!isPresenting && queue.length > 0) {
      present({
        ...queue[0],
        onDidDismiss: () => setIsPresenting(false)
      })
      setQueue(queue.slice(1))
      setIsPresenting(true)
    }
  }, [queue, isPresenting])

  const presentToast = (options: ToastOptions) => {
    setQueue([...queue, options])
  }

  const clickHandler = () => {
    presentToast({ message: `Toast ${new Date().valueOf()}`, duration: 2000 })
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton onClick={clickHandler}>Click</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
