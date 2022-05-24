<template>
    <div>
        <!-- <p>{{likes}}</p> 숫자형 Number -->
        <!-- <p>{{isPublished}}</p> 논리 자료형 Boolean -->
        <!-- <p>{{commentIds}}</p> 배열 Array -->
        <!-- <p>{{author}}</p> 객체 Object -->
        <p>{{id}}{{title}}</p> <!-- 객체의 속성 -->
    </div>
</template>
<script>
    export default {
        props: {
            likes: Number,
            isPublished: Boolean,
            commentIds: Array,
            author: Object,
            
            id: String,
            title: String
        }
    }
</script>
