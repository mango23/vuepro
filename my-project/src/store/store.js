import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
	state: { counts: 10 },
	mutations: {
		getName1(state, n) {
			state.counts += n
			console.log('it is'+state.counts)
		}
	},
	actions: {
		getName1: ({ commit }) => commit('getName1', 12),

		incrementIfOddOnRootSum({ state, commit, rootState }) {
			if((state.count + rootState.counts) % 2 === 1) {
				commit('increment')
			}
		}
	},
	getters: { done(state) { return state.counts + 5; } }
}

const moduleB = {
	state: { count: 0 },
	mutations: {
		getName(state, n) {
			state.count += n
		}
	},
	actions: {
		getName: ({ commit }) => commit('getName', 12)
	}
}

const state = {
	count: 0
}
const mutations = {
	increment(state, n) {
		state.count += n
	},
	decrement(state) {
		state.count -= 2
	}
}
const actions = {
	increments: ({ commit }) => commit('increment', 12),
	decrements: ({ commit }) => commit('decrement'),
	incrementAsync({ commit }) {
		setTimeout(() => {
			commit('decrement')
		}, 1000)
	}
	//	increment: (context) => context.commit('increment',20),
	//	decrement: (context) => context.commit('decrement')
}
const getters = {
	getF(){
		console.log('getF')
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		a: moduleA,
		b: moduleB
	}
})