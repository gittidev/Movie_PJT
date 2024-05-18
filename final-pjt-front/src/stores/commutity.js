import { createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; 

export const useCommunityStore = defineStore('community', () => {
    const state=ref({
        isAuthenticated: false,
        user: null,
        token: null,
        communities: []
    }) 
      
      mutations: {
        setAuthentication(state, status) {
          state.isAuthenticated = status;
        },
        setUser(state, user) {
          state.user = user;
        },
        setToken(state, token) {
          state.token = token;
        },
        setCommunities(state, communities) {
          state.communities = communities;
        },
        addCommunity(state, community) {
          state.communities.push(community);
        },
      },
      actions: {
        login({ commit }, { user, token }) {
          commit('setAuthentication', true);
          commit('setUser', user);
          commit('setToken', token);
        },
        logout({ commit }) {
          commit('setAuthentication', false);
          commit('setUser', null);
          commit('setToken', null);
        },
        async getCommunities({ commit, state }) {
          try {
            const response = await axios.get(`${API_URL}/marshmovie/communities/`, {
              headers: {
                Authorization: `Token ${state.token}`
              }
            });
            commit('setCommunities', response.data);
          } catch (error) {
            console.error(error);
          }
        },
        async createCommunity({ commit, state }, communityData) {
          try {
            const response = await axios.post(`${API_URL}/marshmovie/communities/`, communityData, {
              headers: {
                Authorization: `Token ${state.token}`
              }
            });
            commit('addCommunity', response.data);
          } catch (error) {
            console.error(error);
          }
        },
      },

});
 
