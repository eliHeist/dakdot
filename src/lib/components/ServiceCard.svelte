<script lang="ts">
    import { Check, CircleCheckBig } from "lucide-svelte";
    import * as Card from "./ui/card";

    export let title: string;
    export let description: string;
    export let features: string[];
    export let icon: any;
</script>

<Card.Root>
    <Card.Content>
        <div class="text-white mb-6">
            <svelte:component this="{icon}" size="{48}" />
        </div>

        <h3 class="text-2xl font-bold mb-4">{title}</h3>
        <p class="text-muted-foreground mb-6">{description}</p>

        <ul class="space-y-3">
            {#each features as feature}
                <li class="flex space-x-4 items-center">
                    <span><Check size={16} /></span>
                    <span class="">{feature}</span>
                </li>
            {/each}
        </ul>
    </Card.Content>
</Card.Root>
