#include <assert.h>
#include <stdio.h>

#include "linked_list.h"

void init_free_test() {
    printf("Initialization and free test: ");
    sll *s = init_sll();
    assert(s != NULL);
    free_sll(s);
    printf("passed\n");
}

void basic_test() {
    printf("Basic operation test: ");
    sll *s = init_sll();
    assert(s != NULL);

    assert(!sll_append(s, 5));
    assert(!sll_append(s, 7));
    assert(!sll_append(s, 9));

    i64 r = 0;
    assert(!sll_get(s, &r, 2));
    assert(r == 9);

    assert(!sll_remove_at(s, &r, 1));
    assert(r == 7);

    assert(sll_len(s) == 2);

    assert(!sll_append(s, 11));

    assert(!sll_remove_at(s, &r, 1));
    assert(r == 9);

    assert(sll_remove(s, 9));

    assert(!sll_remove_at(s, &r, 0));
    assert(r == 5);
    assert(!sll_remove_at(s, &r, 0));
    assert(r == 11);
    assert(sll_len(s) == 0);

    assert(!sll_prepend(s, 5));
    assert(!sll_prepend(s, 7));
    assert(!sll_prepend(s, 9));

    assert(!sll_get(s, &r, 2));
    assert(r == 5);

    assert(!sll_get(s, &r, 0));
    assert(r == 9);

    assert(!sll_remove(s, 9));

    assert(sll_len(s) == 2);
    
    assert(!sll_get(s, &r, 0));
    assert(r == 7);

    free_sll(s);
    printf("passed\n");
}

int main() {
    init_free_test();
    basic_test();
}
