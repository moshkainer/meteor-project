import axios from 'axios';
import { Meteor } from '~/types';

export const fetchMeteors = async (): Promise<{ data: Meteor[] }> =>
  axios.get('https://data.nasa.gov/resource/y77d-th95.json');
