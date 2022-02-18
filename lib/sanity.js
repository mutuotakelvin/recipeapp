import {
    createClient,
    createImageUrlBuilder,
    createPortableTextComponent,
    createPreviewSubscriptionHook,
  } from 'next-sanity'

const config = {
    projectId:"nopgoqnx",
    dataset:"production",
    apiVersion:"2021-10-21",
    useCdn:false
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
    ...config,
    serializers:{},
})