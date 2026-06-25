import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className= "card-container">
          <IonCard className="card">
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/235414847?v=4&size=64" />
            <IonCardHeader>
              <IonCardTitle>Mateo Rodriguez</IonCardTitle>
              <IonCardSubtitle>mate.rodriguezx</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Desarrollador web con experiencia en frontend y backend.
                Apasionado por la tecnologia y el codigo limpio.</p>
            </IonCardContent>
          </IonCard>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
