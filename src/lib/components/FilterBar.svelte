<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";

    export let tags: { id: number; name: string }[] = [];
    export let industries: { id: number; name: string }[] = [];
    export let selectedTags: number[] = [];
    export let selectedIndustry: number | null = null;

    const dispatch = createEventDispatcher();

    function handleTagClick(tagId: number) {
        const newTags = selectedTags.includes(tagId)
            ? selectedTags.filter((id) => id !== tagId)
            : [...selectedTags, tagId];
        dispatch("filterchange", { tags: newTags, industry: selectedIndustry });
    }

    function handleIndustryChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        const industryId = select.value ? parseInt(select.value) : null;
        dispatch("filterchange", { tags: selectedTags, industry: industryId });
    }
</script>

<Card.Root>
    <Card.Content>
        <div class="flex flex-col md:flex-row md:items-center gap-6">
            <div class="flex-1">
                <h3 class="text-sm font-semibold mb-3">Filter by Tags</h3>
                <div class="flex flex-wrap gap-2">
                    {#each tags as tag}
                        <button
                            class="px-3 py-1 rounded-full text-sm transition-colors"
                            class:bg-primary-600="{selectedTags.includes(
                                tag.id
                            )}"
                            class:text-white="{selectedTags.includes(tag.id)}"
                            class:bg-gray-100="{!selectedTags.includes(tag.id)}"
                            class:hover:bg-primary-500="{!selectedTags.includes(
                                tag.id
                            )}"
                            on:click="{() => handleTagClick(tag.id)}">
                            {tag.name}
                        </button>
                    {/each}
                </div>
            </div>

            <div class="w-full md:w-64">
                <h3 class="text-sm font-semibold mb-3">Filter by Industry</h3>
                <Select.Root on:change="{handleIndustryChange}">
                    <Select.Trigger class="w-full">
                        <Select.Value placeholder="Industry" />
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Item value="">All Industries</Select.Item>
                        {#each industries as industry}
                            <Select.Item value="{industry.id}">{industry.name}</Select.Item>
                        {/each}
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
    </Card.Content>
</Card.Root>
<div class="shadow-md rounded-lg p-6 mb-8"></div>
