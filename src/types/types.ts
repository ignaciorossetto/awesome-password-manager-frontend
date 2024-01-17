export type VaultItemId = `${string}-${string}-${string}-${string}-${string}`

export type VaultItemType = {
    id: VaultItemId,
    title: string,
    value: string,
    bgColor?: string
    type?: string | null,
}

export type VaultCardProps = {
    type?: string | null,
    title?: string,
    value?: string,
    bgColor?: string,
    handleCreateDeletePassFc?: () =>  void,
}