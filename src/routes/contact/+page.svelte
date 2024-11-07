<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { Mail, Phone, MapPin } from "lucide-svelte";

    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Textarea } from "$lib/components/ui/textarea";
    import Button from "$lib/components/ui/button/button.svelte";

    let name = "";
    let email = "";
    let message = "";
    let subject = "";

    onMount(() => {
        gsap.from(".contact-content", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
        });
    });

    async function handleSubmit(event: Event) {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, subject, message });
    }
</script>

<svelte:head>
    <title>Contact Us | DakDot</title>
</svelte:head>

<div class="min-h-screen full-width py-40">
    <div class="px-4">
        <div class="max-w-4xl mx-auto">
            <div class="contact-content text-center mb-24">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    Get in Touch
                </h1>
                <p class="text-lg text-muted-foreground">
                    Have a project in mind? Let's discuss how we can help bring
                    your vision to life.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <Card.Root>
                    <Card.Content>
                        <form on:submit="{handleSubmit}" class="space-y-6">
                            <div>
                                <Label for="name">Name</Label>
                                <Input bind:value="{name}" id="name" required/>
                            </div>

                            <div>
                                <Label for="email">Email</Label>
                                <Input type="email" bind:value="{email}" id="email" required/>
                            </div>

                            <div>
                                <Label for="subject">Subject</Label>
                                <Input bind:value="{subject}" id="subject" required/>
                            </div>

                            <div>
                                <Label for="message">Message</Label>
                                <Textarea bind:value="{message}" id="message" rows=5 required/>
                            </div>
        
                            <Button variant="ghost" size="lg" type="submit" class="w-full">Send Message</Button>
                        </form>
                    </Card.Content>
                </Card.Root>

                <!-- Contact Information -->
                <div class="contact-content space-y-8">
                    <Card.Root>
                        <Card.Content>
                            <div class="flex items-start space-x-4">
                                <div class="text-primary-600">
                                    <Mail size="{24}" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2">
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:connect@dakdot.com"
                                        class="hover:text-primary-600">
                                        connect@dakdot.com
                                    </a>
                                </div>
                            </div>
                        </Card.Content>
                    </Card.Root>

                    <Card.Root>
                        <Card.Content>
                            <div class="flex items-start space-x-4">
                                <div class="text-primary-600">
                                    <Phone size="{24}" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2">
                                        Phone
                                    </h3>
                                    <div class="space-y-2">
                                        <a
                                            href="tel:+256760971269"
                                            class="block hover:text-primary-600">
                                            +256 760 971 269
                                        </a>
                                        <a
                                            href="tel:+256703281248"
                                            class="block hover:text-primary-600">
                                            +256 703 281 248
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card.Content>
                    </Card.Root>

                    <Card.Root>
                        <Card.Content>
                            <div class="flex items-start space-x-4">
                                <div class="text-primary-600">
                                    <MapPin size="{24}" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2">
                                        Location
                                    </h3>
                                    <p class="">Kampala, Uganda</p>
                                </div>
                            </div>
                        </Card.Content>
                    </Card.Root>
                </div>
            </div>
        </div>
    </div>
</div>
