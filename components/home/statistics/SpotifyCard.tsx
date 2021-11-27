import { useEffect, useState } from 'react'
import { scrobbleTrack } from "@/interfaces/interfaces";
import { FaSpotify } from "react-icons/fa";
import {
  Title,
  StatsCardWrapper,
  CardContent,
  Content,
  Song,
  SongArtist
} from "./StatsCard.styles";
import useSWR from 'swr';
import { fetchLastFM } from '@/lib/api';

const SpotifyCard: React.FC<scrobbleTrack> = ({ scrobble }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [song, setSong] = useState({ artist: '', name: '' })
  let tracks = scrobble?.recenttracks.track.slice(0, 1)

  const { data, error } = useSWR(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=andreaserhard&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`, fetchLastFM)

  useEffect(() => {
    if (data) {
      tracks = data?.recenttracks?.track.slice(0, 1);
    }

    if (error) {
      setIsPlaying(false)
    }

    tracks?.map((t) => {
      if (t["@attr"]?.nowplaying === 'true') {
        setIsPlaying(true)
        setSong({ artist: t.artist["#text"], name: t.name })
      } else {
        setIsPlaying(false)
        setSong({ artist: '', name: '' })
      }
    })
  }, [data])


  return (
    <StatsCardWrapper>
      <CardContent>
        <Content>
          <span>
            <FaSpotify color="#1ed760" size={18} />
          </span>
        </Content>
        {
          isPlaying ?
            <Song>
              < Title > Currently listening to</Title>
              <SongArtist>
                {song.artist} - {song.name}
              </SongArtist>
            </Song> :
            <Content>Not playing Spotify</Content>
        }
      </CardContent>
    </StatsCardWrapper >
  );
};
export default SpotifyCard;
