import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'


Vue.use(VueRouter)



const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/creation',
        name: 'creation',
        component: () =>
            import ( /* webpackChunkName: "mycreation" */ '../views/Creation.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/original-books',
        name: 'original-books',
        component: () =>
            import ( /* webpackChunkName: "original-books" */ '../views/OriginalBooks.vue'),
    },
    {
        path: '/original-illustration',
        name: 'original-illustration',
        component: () =>
            import ( /* webpackChunkName: "classic-books" */ '../views/OriginalIllustration.vue'),
    },
    {
        path: '/original-books/:bookId',
        name: 'original-bookdetails',
        component: () =>
            import ( /* webpackChunkName: "book-details" */ '../views/OriginalBookdetails.vue'),
        props: true,
    },

    {
        path: '/original-illustration/:illId',
        name: 'original-illusdetails',
        component: () =>
            import ( /* webpackChunkName: "book-details" */ '../views/OriginalIllusdetails.vue'),
        props: true,
    },

    {
        path: '/connection',
        name: 'connection',
        component: () =>
            import ( /* webpackChunkName: "connection" */ '../views/Connection.vue'),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/user',
        name: 'user',
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/MyHomePage.vue'),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/user/profile',
        name: 'profile',
        component: () =>
            import ( /* webpackChunkName: "my-information" */ '../views/UserProfile.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload',
        name: 'upload',
        component: () =>
            import ( /* webpackChunkName: "upload" */ '../views/Upload.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/submit-res',
        name: 'upload-production',
        component: () =>
            import ( /* webpackChunkName: "upload-production" */ '../views/SubmitRes.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/upload-illustration',
        name: 'upload-illustration',
        component: () =>
            import ( /* webpackChunkName: "upload-illustration" */ '../views/UploadIllustration.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/edition',
        name: 'edition',
        component: () =>
            import ( /* webpackChunkName: "upload-illustration" */ '../views/EditionWork.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/upload-local-illustration',
        name: 'upload-local-illustration',
        component: () =>
            import ( /* webpackChunkName: "upload-illustration" */ '../views/UploadLocalIllu.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/compose-illustration/topdf',
        name: 'topdf',
        component: () =>
            import ( /* webpackChunkName: "topdf" */ '../views/ToPdf.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/compose-illustration',
        name: 'compose-illustration',
        component: () =>
            import ( /* webpackChunkName: "compose-illustration" */ '../views/ComposeIllustration.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/upload-loacl-pdf',
        name: 'add-local-pdf',
        component: () =>
            import ( /* webpackChunkName: "add-local-pdf" */ '../views/UploadLocalPdf.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user/upload/upload-element',
        name: 'add-element',
        component: () =>
            import ( /* webpackChunkName: "add-element" */ '../views/UploadElement.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-g/:authorId',
        name: 'user-g',
        component: () =>
            import ( /* webpackChunkName: "user" */ '../views/UserG.vue'),
        props: true,
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ( /* webpackChunkName: "test" */ '../views/test.vue'),
    },
    {
        path: '/user/savedraft',
        name: 'savedraft',
        component: () =>
            import ( /* webpackChunkName: "savedraft" */ '../views/SaveDraft.vue'),
        meta: {
            requiresAuth: true
        }
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem("token")
        if ((!token || token == "undefined") && (to.name == 'creation' || to.name == 'upload' || to.name == 'user')) {
            store.state.isMask = true
            store.state.isLoginBox = true
        } else {
            next();
        }
    } else {
        next();
    }

})

export default router