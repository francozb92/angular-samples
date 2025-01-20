interface IFeatureContent{
    name: string,
    description: string,
    hasCode: boolean,
    hasImages: boolean,
    hasIcons: boolean,
    codeSources: Array<string>,
    imageSources: Array<string>,
    iconSources: Array<string>
}