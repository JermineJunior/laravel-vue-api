<?php

use App\Models\Post;

test('the index api route returns all posts', function () {
    $posts = Post::factory(3)->create();
    $res = $this->get('/api/posts');

    $res->assertOk();
});
