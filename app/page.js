/* eslint-disable react/jsx-key */
import {getMovies} from './actions'
import MediaGallery from './components/media-gallery';

export default async function Home() {
  let movies = await getMovies();

  return (
    <div>
      <MediaGallery movies={movies}/>
    </div>
  )
}
