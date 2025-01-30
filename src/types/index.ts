import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IconType } from "react-icons";

export interface SliderButtonProps {
  isRight: boolean;
}
export interface ButtonProps {
  filled: boolean;
  label?: string;
  icon?: IconType;
  rounded?: boolean;
  onClick?: () => void;
  hidden?: boolean;
}
export interface CardProps {
  defaultCard?: boolean;
  removeMovie?: (id: number) => void;
  item: Media;
  MediaType?: string;
  enableGenres?: boolean;
}
export enum MediaType {
  MOVIE = "movie",
  TV = "tv",
}
export interface Genre {
  id: number;
  name: string;
}

export interface Media {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_pat: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  key?: string;
  type?: string;
  genres?: [];
}
export interface Videos {
  id: string;
  key: string;
  type: string;
  name: string;
  site: string;
}

export interface MediaItem{
    id: number;
    type: "movie" | "tv";
    title: string;
}

export interface AxiosErrorType {
  code?: string;
  message: string;
  config: AxiosRequestConfig;
  name: string;
  request?: XMLHttpRequest;
  response?: AxiosResponse;
  status?: number;
  stack?: string;
}

export interface RequestError extends Error {
  status?: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: RequestError | undefined;
}
export interface MovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  genres?: Genre[];
  results: Media[];
}

export  interface RenderGenreProps{
    genereId: number[];

}

export interface ChildrenProvider {
    children : React.ReactNode
}
export interface ModalProps {
     modalData : Media;
     modalOpen: boolean;
     enableGenres: boolean;
     handleClose: ()=>void;
}
export interface SmilarMediaProps {
     id:number;
}