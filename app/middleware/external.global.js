export default defineNuxtRouteMiddleware((to) => {
    if (to.meta.externalRedirect) {
        return navigateTo(to.meta.externalRedirect, { external: true })
    }
})