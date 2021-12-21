<script>
    import ZonaCiptaLogo from "../../custom/Layout/ZonaCiptaLogo.svelte"
    import CarouselItem from "../../custom/ImageCarousel/CarouselItem.svelte";
    import Appbar from "../../custom/Appbar/Appbar.svelte";
    import Menutitle from '../../custom/Text/MenuTitle.svelte'
    import CarouselWrapper from "../../custom/ImageCarousel/CarouselWrapper.svelte";
</script>

<div class="min-h-screen w-full max-w-lg px-4">
    <ZonaCiptaLogo/>
    <Menutitle title="Riwayat perjalanan" subtitle="Lihat lebih banyak"/>
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