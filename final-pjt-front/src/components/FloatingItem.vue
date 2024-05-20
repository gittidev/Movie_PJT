<template>
    <div>

        <div class="container">
        <div class="circle-box">
            <div class="circle">
                <span>Hover</span>
            </div>
        </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

        .container {
            width: 100%;
            height: 100%;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .circle, .circle span, .circle-box {
            position: absolute;
            display: block;
            left: 50%;
            transform: translateX(-50%);
        }
        .circle-box {
            top: 50%;
            width: 300px;
            height: 400px;
            background: #333;
            cursor: pointer;
        }
        .circle {
            top: 40%;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: yellow;
            box-shadow: 0 0 15px rgba(221, 224, 11, 1);
        }
        .circle span {
            top: 50%;
            font-size: 2em;
            font-weight: bold;
            font-family: Arial, sans-serif;
        }
        .circle-box:hover > .circle {
            animation: circlemove 1.5s infinite linear;
        }
        @keyframes circlemove {
            0%, 100% {
                transform: translateX(-50%) translateY(-50%);
            }
            50% {
                transform: translateX(-50%) translateY(-60%);
                box-shadow: 0 0 30px rgba(221, 224, 11, 1);
            }
        }


</style>