<template>
    <div class="bar-handler">
        <div class="input-group">
            <div class="col-8">
                <input type="text" class="form-control" id="inputPassword">
            </div>
            <button type="button" class="btn">검색</button>
        </div>
    </div>

</template>

<script setup>


</script>

<style scoped>

.bar-handler {
    top: 7rem;
    width: 100%;
}

input {
    border-radius: 10px 0 0 10px;
    height: 4rem;
}

button {
    border-radius: 0px 10px 10px 0px;
    background-color: rgb(255, 77, 77);
    width: 5rem;
}

button:hover {
    background-color: rgb(0, 200, 160);  
    transition: 500ms;
}
</style>