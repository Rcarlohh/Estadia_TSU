import React from 'react';
import { useParams } from 'react-router-dom';
import BlogScrenn from './BlogScreen';

const BlogDetailScreen = () => {
  const { eventId } = useParams();
  const events = [
    {
      id: 'evento1',
      imgSrc: 'https://via.placeholder.com/350x150',
      title: 'Evento 1',
      description: 'Descripción breve del evento 1.',
      fullDescription: 'Descripción completa del evento 1.'
    },
    {
      id: 'evento2',
      imgSrc: 'https://via.placeholder.com/350x150',
      title: 'Evento 2',
      description: 'Descripción breve del evento 2.',
      fullDescription: 'Descripción completa del evento 2.'
    },
    {
      id: 'evento3',
      imgSrc: 'https://via.placeholder.com/350x150',
      title: 'Evento 3',
      description: 'Descripción breve del evento 3.',
      fullDescription: 'Descripción completa del evento 3.'
    }
  ];

  return <BlogScrenn events={events.filter(event => event.id === eventId)} />;
};

export default BlogDetailScreen;
