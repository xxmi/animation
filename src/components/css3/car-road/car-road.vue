<template>
    <section class="car-road">
        <div class="car">
            <div class="body">
                <div class="mirror-wrap">
                    <div class="mirror-inner">
                        <div class="mirror">
                            <div class="shine"></div>
                        </div>
                    </div>
                </div>
                <div class="middle">
                    <div class="top">
                        <div class="line"></div>
                    </div>
                    <div class="bottom">
                        <div class="lights">
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
                <div class="bumper">
                    <div class="top"></div>
                    <div class="middle"
                         data-numb="渝XXMI.CN"></div>
                    <div class="bottom"></div>
                </div>
            </div>
            <div class="tyres">
                <div class="tyre back"></div>
                <div class="tyre front"></div>
            </div>
        </div>
        <div class="road-wrap">
            <div class="road">
                <div class="lane-wrap">
                    <div class="lane">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: "car-road",
  };
</script>

<style lang="less" src="./car-road.less" scoped/>
