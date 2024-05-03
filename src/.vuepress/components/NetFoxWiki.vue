<template>
<div class="pico"> 
    <article >
        <header v-if="isSignedIn">
            <nav>
                <hgroup>
                    <h2>您好，{{ user.username }} </h2>
                    <b class="text-68">Hello, {{ user.username }}</b>
                </hgroup>
                <ul>
                    <li>
                        <RouterLink role="button" class="outline" to="/wiki/edit">发布 Wiki</RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
        <h1>
            aaaaa
        </h1>
        <footer style="background-color: #485fc7;text-align: center">
            <RouterLink to="/wiki/all" style="color: #fff"><b>NetFox.Wiki</b></RouterLink>
        </footer>
    </article> 
</div>
</template>

<style>

</style>