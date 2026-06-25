import React from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { pencilOutline, trashOutline } from 'ionicons/icons';

import './Tab1.css';

interface RepoItemProps {
  name: string;
  description: string;
  language: string;
  avatarUrl: string;
}

const RepoItem: React.FC<RepoItemProps> = ({
  name,
  description,
  language,
  avatarUrl
}) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot="start">
          <img alt={name} src={avatarUrl} />
        </IonThumbnail>

        <IonLabel>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Lenguaje: {language}</p>
        </IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption
          color="primary"
          onClick={() => alert(`Editar ${name}`)}
        >
          <IonIcon icon={pencilOutline} />
        </IonItemOption>

        <IonItemOption
          color="danger"
          onClick={() => alert(`Eliminar ${name}`)}
        >
          <IonIcon icon={trashOutline} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <RepoItem
            name="Repositorio 1"
            description="Descripción del repositorio 1"
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/235414847?v=4&size=64"
          />

          <RepoItem
            name="Repositorio 2"
            description="Descripción del repositorio 2"
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/235414847?v=4&size=64"
          />

          <RepoItem
            name="Repositorio 3"
            description="Descripción del repositorio 3"
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/235414847?v=4&size=64"
          />

          <RepoItem
            name="Repositorio 4"
            description="Descripción del repositorio 4"
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/235414847?v=4&size=64"
          />

          <RepoItem
            name="Repositorio 5"
            description="Descripción del repositorio 5"
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/235414847?v=4&size=64"
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;