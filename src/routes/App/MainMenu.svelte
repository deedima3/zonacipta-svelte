<script>
    import ZonaCiptaLogo from "../../custom/Layout/ZonaCiptaLogo.svelte"
    import CarouselItem from "../../custom/ImageCarousel/CarouselItem.svelte";
    import Appbar from "../../custom/Appbar/Appbar.svelte";
    import Menutitle from '../../custom/Text/MenuTitle.svelte'
    import CarouselWrapper from "../../custom/ImageCarousel/CarouselWrapper.svelte";
    import IconPicker from '../../custom/IconPicker/IconPicker.svelte'
    import SideCarouselItem from "../../custom/SideCarousel/SideCarouselItem.svelte";
    import SideCarouselWrapper from "../../custom/SideCarousel/SideCarouselWrapper.svelte";

    const spesific = [
        {
            'icon' : "mdi:thumbs-up-down",
            'title' : "Joint Meeting",
        },
        {
            'icon' : "mdi:star-crescent",
            'title' : "Religious Meeting",
        },
        {
            'icon' : "mdi:pill",
            'title' : "Medical Safety",
        },
        {
            'icon' : "mdi:pine-tree",
            'title' : "Outdoor Meeting",
        },
    ]

    const tambahan = [
        {
            'icon' : "mdi:account-multiple",
            'title' : "Moderator",
        },
        {
            'icon' : "mdi:food",
            'title' : "Food and Beverage",
        },
        {
            'icon' : "mdi:wifi",
            'title' : "Wifi",
        },
        {
            'icon' : "mdi:soundbar",
            'title' : "Sound System",
        },
    ]

</script>

<div class="min-h-screen w-full max-w-lg px-4">
        <ZonaCiptaLogo/>
        <Menutitle title="Temukan" subtitle="Lihat lebih banyak"/>
        <SideCarouselWrapper>
            <SideCarouselItem 
                image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
                altName="DNA" 
                text="Dharma Negara Alayana" 
                location="Denpasar">
            </SideCarouselItem>
            <SideCarouselItem 
                image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
                altName="DNA" 
                text="Dharma Negara Alayana" 
                location="Denpasar">
            </SideCarouselItem>
            <SideCarouselItem 
                image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
                altName="DNA" 
                text="Dharma Negara Alayana" 
                location="Denpasar">
            </SideCarouselItem>
            <SideCarouselItem 
                image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
                altName="DNA" 
                text="Dharma Negara Alayana" 
                location="Denpasar">
            </SideCarouselItem>
        </SideCarouselWrapper>
        <Menutitle title="Perlu lebih spesifik?" subtitle="Lihat lebih banyak"/>
        <div class="grid grid-row-1 grid-flow-col gap-4 mt-4">
            {#each spesific as item}
                <IconPicker icon={item.icon} title={item.title}></IconPicker>
            {/each}
        </div>
        <Menutitle title="Perlu tambahan?" subtitle="Lihat lebih banyak"/>
        <div class="grid grid-row-1 grid-flow-col gap-4 mt-4">
            {#each tambahan as item}
                <IconPicker icon={item.icon} title={item.title}></IconPicker>
            {/each}
        </div>
        <Menutitle title="Perlu tempat lainnya?" subtitle="Lihat lebih banyak"/>
        <CarouselWrapper>
            <CarouselItem 
            image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
            altName="DNA" 
            text="Dharma Negara Alayana" 
            location="Denpasar">
        </CarouselItem>
        <CarouselItem 
            image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
            altName="DNA" 
            text="Dharma Negara Alayana" 
            location="Denpasar">
        </CarouselItem>
        <CarouselItem 
            image="https://cdn-2.tstatic.net/bali/foto/bank/images/alaya-dharma-negara-siap-pertemukan-komunitas-kreatif.jpg" 
            altName="DNA" 
            text="Dharma Negara Alayana" 
            location="Denpasar">
        </CarouselItem>
        </CarouselWrapper>
</div>
<Appbar/>