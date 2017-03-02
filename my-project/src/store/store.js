import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
	state: { count: 0 },
	mutations: {
		getName1(state, n) {
			state.count += n
		}
	},
	actions: {
		getName1: ({ commit }) => commit('getName1', 12)
	},
	getters: { done(state) { return state.count + 5; } }
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
	increment: ({ commit }) => commit('increment', 12),
	decrement: ({ commit }) => commit('decrement'),
	incrementAsync ({ commit }) {
		setTimeout(() => {
			commit('decrement')
		}, 1000)
	}
	//	increment: (context) => context.commit('increment',20),
	//	decrement: (context) => context.commit('decrement')
}
const getters = {
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
