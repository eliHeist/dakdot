<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import * as Select from "$lib/components/ui/select";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Checkbox } from "$lib/components/ui/checkbox";
</script>

<div class="py-40 min-h-screen">
    <form action="">
        <Card.Root>
            <Card.Content>
                <div class="grid space-y-4">
                    <div class="">
                        <Label for="title">Title</Label>
                        <Input id="title" />
                    </div>
                    <div class="">
                        <Label for="subtitle">Subtitle</Label>
                        <Input id="subtitle" />
                    </div>
                    <div class="">
                        <Label for="description">Description</Label>
                        <Textarea id="description" />
                    </div>
                    <div class="">
                        <Label for="tags">Tags</Label>
                        <div class="flex">
                            <p>
                                <Checkbox id="terms1" />
                                <label for="terms1">Tag</label>
                            </p>
                        </div>
                    </div>
                </div>
            </Card.Content>
        </Card.Root>
    </form>
</div>
